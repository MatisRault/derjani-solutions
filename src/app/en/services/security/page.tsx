import SingleServicePage from '@/components/ui/SingleServicePage';

export default function SecurityPage() {
  const serviceData = {
    key: 'security',
    heroImage: '/assets/services/securite.jpg',
    capabilities: [
      { key: 'barriers', icon: '🚧' },
      { key: 'fencing', icon: '🔒' },
      { key: 'surveillance', icon: '📹' },
      { key: 'vehicles', icon: '🚗' },
      { key: 'equipment', icon: '🛡️' },
      { key: 'systems', icon: '🔐' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}