export default async function Notifications() {
   const notifications = await fetch('https://api.example.com/notifications')
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error fetching notifications:', error);
      return [];
    });
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Notifications</h1>
      <p className="text-lg">Here are your latest notifications.</p>
    </div>
  );
}
