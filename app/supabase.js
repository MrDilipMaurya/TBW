import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://anyijxohgwdjjomafoml.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWlqeG9oZ3dkampvbWFmb21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3ODY5MjIsImV4cCI6MjAwNTM2MjkyMn0.0q5dBxDBvQwFoxuoa4yg1S8wWtOT3uF1sK-DZfRZtLE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
