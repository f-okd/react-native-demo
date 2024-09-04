import { useState, useEffect } from 'react';
import { supabaseGetCurrentUser } from '@/lib/supabase/apiAuth';
import { User } from '@supabase/supabase-js';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await supabaseGetCurrentUser();
        setUser(currentUser);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false); // Set loading to false whether it succeeds or fails
      }
    };

    fetchUser();
  }, []); // Empty array ensures this runs only on mount

  return { user, loading, error };
};
