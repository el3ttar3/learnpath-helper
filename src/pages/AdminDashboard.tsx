import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      
      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch courses",
          variant: "destructive",
        });
      } else {
        setCourses(data);
      }
    };

    fetchCourses();
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Courses</h2>
          <div className="grid gap-4">
            {courses.map((course: any) => (
              <div key={course.id} className="border p-4 rounded">
                <h3 className="font-medium">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <p className="text-sm text-gray-600">Price: ${course.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;