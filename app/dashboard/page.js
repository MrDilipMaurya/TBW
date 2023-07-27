"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../supabase';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const user = supabase.auth.user();

    if (!user) {
      router.push('/login'); // Redirect to the login page if not authenticated
    }
  }, []);

  // Render the dashboard content
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
}