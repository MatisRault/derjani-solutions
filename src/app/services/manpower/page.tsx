import SingleServicePage from '@/components/ui/SingleServicePage';

export default function ManpowerPage() {
  const serviceData = {
    key: 'manpower',
    heroImage: '/assets/services/rh.jpg',
    capabilities: [
      { key: 'engineers', icon: '👨‍💼' },
      { key: 'architects', icon: '👩‍💼' },
      { key: 'technicians', icon: '👷' },
      { key: 'consultants', icon: '🤝' },
      { key: 'chefs', icon: '👨‍🍳' },
      { key: 'specialists', icon: '🔬' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}