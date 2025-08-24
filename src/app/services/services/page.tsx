import SingleServicePage from '@/components/ui/SingleServicePage';

export default function ServicesPage() {
  const serviceData = {
    key: 'services',
    heroImage: '/assets/services/services.jpg',
    capabilities: [
      { key: 'catering', icon: '🍽️' },
      { key: 'maintenance', icon: '🔧' },
      { key: 'management', icon: '🏢' },
      { key: 'water', icon: '💧' },
      { key: 'landscaping', icon: '🌱' },
      { key: 'network', icon: '🌐' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}