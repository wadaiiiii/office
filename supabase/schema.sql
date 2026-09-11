-- Mastering Office Tools LMS Database Schema

create table if not exists profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 name text,
 email text,
 role text default 'participant',
 created_at timestamp default now()
);

create table if not exists modules (
 id bigint generated always as identity primary key,
 title text not null,
 description text,
 order_number integer,
 created_at timestamp default now()
);

create table if not exists lessons (
 id bigint generated always as identity primary key,
 module_id bigint references modules(id) on delete cascade,
 title text not null,
 content text,
 created_at timestamp default now()
);

create table if not exists quiz_questions (
 id bigint generated always as identity primary key,
 module_id bigint references modules(id) on delete cascade,
 question text not null,
 option_a text,
 option_b text,
 option_c text,
 correct_answer text
);

create table if not exists user_progress (
 id bigint generated always as identity primary key,
 user_id uuid references profiles(id) on delete cascade,
 module_id bigint references modules(id) on delete cascade,
 completion integer default 0,
 score integer default 0,
 updated_at timestamp default now()
);

create table if not exists certificates (
 id bigint generated always as identity primary key,
 user_id uuid references profiles(id) on delete cascade,
 certificate_number text,
 issued_at timestamp default now()
);
