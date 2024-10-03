'use client'
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const AdminContent = () => {
  const searchParams = useSearchParams();
 let hdhr = searchParams.get('name')
  
  // Your logic to use searchParams goes here
  return (
    <div>
      {/* Render your admin content based on searchParams */}
      <h1>Admin Page</h1>
      <p>Search Params: {hdhr}</p>
    </div>
  );
};

const AdminPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminContent />
    </Suspense>
  );
};
/////////////////////////////
export default AdminPage;
