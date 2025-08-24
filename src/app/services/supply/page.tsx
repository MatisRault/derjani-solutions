import SingleServicePage from '@/components/ui/SingleServicePage';

export default function SupplyPage() {
  const serviceData = {
    key: 'supply',
    heroImage: '/assets/services/fourniture.jpg',
    capabilities: [
      { key: 'vehicles', icon: '🚛' },
      { key: 'machinery', icon: '🚜' },
      { key: 'equipment', icon: '⚙️' },
      { key: 'furniture', icon: '🪑' },
      { key: 'medical', icon: '🏥' },
      { key: 'electrical', icon: '🔌' }
    ],
    process: true,
    expertise: true
  };

  return <SingleServicePage serviceData={serviceData} />;
}