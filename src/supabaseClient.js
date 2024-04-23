// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfgysthmmqfcictzvhtu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ3lzdGhtbXFmY2ljdHp2aHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MTM1MzcsImV4cCI6MjAyNTE4OTUzN30.XOkGN4O53-VKQp8MOdHLaBz00JP1eUaNjpWXw_EN-do';  // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
