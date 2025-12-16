export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-3 text-gray-600">
        You do not have permission to view this page.
      </p>
    </div>
  );
}
