import SingleServicePage from '@/components/ui/SingleServicePage';

export default function ConstructionPage() {
  const serviceData = {
    key: 'construction',
    heroImage: '/assets/services/construction.jpg',
    capabilities: [
      { key: 'camps', icon: '🏕️' },
      { key: 'structures', icon: '🏭' },
      { key: 'prefab', icon: '🏗️' },
      { key: 'infrastructure', icon: '🛣️' },
      { key: 'industrial', icon: '⚡' },
      { key: 'specialized', icon: '🚂' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}