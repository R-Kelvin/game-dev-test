create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  sobrenome text not null,
  data_nascimento date not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles podem ser lidos pelo proprio usuario"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Profiles podem ser criados pelo proprio usuario"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Profiles podem ser atualizados pelo proprio usuario"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    nome,
    sobrenome,
    data_nascimento,
    email
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'nome', ''),
    coalesce(new.raw_user_meta_data ->> 'sobrenome', ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'data_nascimento', '')::date, current_date),
    new.email
  )
  on conflict (id) do update set
    nome = excluded.nome,
    sobrenome = excluded.sobrenome,
    data_nascimento = excluded.data_nascimento,
    email = excluded.email;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;

create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_user_profile();
