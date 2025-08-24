import SingleServicePage from '@/components/ui/SingleServicePage';

export default function PowerPage() {
  const serviceData = {
    key: 'power',
    heroImage: '/assets/services/energie.jpg',
    capabilities: [
      { key: 'generators', icon: '⚡' },
      { key: 'powerplants', icon: '🏭' },
      { key: 'installation', icon: '🔧' },
      { key: 'maintenance', icon: '⚙️' },
      { key: 'automation', icon: '🤖' },
      { key: 'control', icon: '📊' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}