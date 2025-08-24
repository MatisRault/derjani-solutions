'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function CGV() {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'CGV' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Conditions Générales de Vente"
        description="Nos conditions de vente et modalités contractuelles"
        backgroundImage="/legals.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        
          <div className="space-y-8">
            <section>
              <div className="bg-bordeaux-50 rounded-lg p-6 mb-8">
                <Paragraph className="text-gray-700 mb-4">
                  <strong>Dernière mise à jour :</strong> [Date à préciser]
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
                  Derjani Group S.A.R.L, société de droit libanais, et ses clients professionnels.
                </Paragraph>
              </div>
            </section>

            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">1. Champ d'application</H2>
            <Paragraph className="text-gray-700 mb-4">
              Les présentes CGV s'appliquent à toutes les prestations de services et ventes de biens réalisées par Derjani Group, notamment :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Services de construction et BTP</li>
              <li>Fourniture et installation d'équipements de génération d'énergie</li>
              <li>Services et équipements de sécurité</li>
              <li>Fourniture d'équipements et véhicules</li>
              <li>Services techniques et de maintenance</li>
              <li>Prestations de ressources humaines</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">2. Devis et commandes</H2>
            
            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">2.1 Devis</H3>
              <Paragraph className="text-gray-700">
                Tous nos devis sont établis gratuitement et sont valables 30 jours sauf mention contraire. 
                Ils sont personnalisés selon les spécifications du client et constituent la base de notre engagement contractuel.
              </Paragraph>
            </div>

            <div>
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">2.2 Commandes</H3>
              <Paragraph className="text-gray-700">
                Toute commande implique l'adhésion entière et sans réserve du client aux présentes CGV. 
                La signature du devis ou bon de commande par le client vaut acceptation définitive de la commande.
              </Paragraph>
            </div>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">3. Prix et conditions de paiement</H2>
            
            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.1 Prix</H3>
              <Paragraph className="text-gray-700">
                Les prix sont exprimés en dollars américains (USD) ou en devise locale selon accord, hors taxes. 
                Ils comprennent uniquement les prestations expressément mentionnées dans le devis.
              </Paragraph>
            </div>

            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.2 Modalités de paiement</H3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Acompte de 30% à la commande</li>
                <li>40% à la livraison ou début des travaux</li>
                <li>Solde de 30% dans les 30 jours suivant la fin des prestations</li>
              </ul>
              <Paragraph className="text-gray-700 mt-4">
                D'autres modalités de paiement peuvent être convenues par accord écrit entre les parties.
              </Paragraph>
            </div>

            <div>
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.3 Retard de paiement</H3>
              <Paragraph className="text-gray-700">
                Tout retard de paiement entraîne de plein droit l'application d'intérêts de retard au taux de 1,5% par mois, 
                ainsi qu'une indemnité forfaitaire de recouvrement de 40 USD.
              </Paragraph>
            </div>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">4. Délais d'exécution</H2>
            <Paragraph className="text-gray-700 mb-4">
              Les délais d'exécution sont donnés à titre indicatif et courent à compter de la réception de l'acompte et de tous les éléments nécessaires à l'exécution de la prestation.
            </Paragraph>
            <Paragraph className="text-gray-700">
              Un retard dans l'exécution ne peut donner lieu qu'à dommages-intérêts, à l'exclusion de toute autre indemnité. 
              Le client ne pourra prétendre à des dommages-intérêts qu'en cas de retard dépassant 30% du délai initialement prévu.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">5. Livraison et réception</H2>
            
            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">5.1 Modalités de livraison</H3>
              <Paragraph className="text-gray-700">
                Les livraisons sont effectuées à l'adresse indiquée par le client. Les risques sont transférés au client dès la remise des biens au transporteur ou dès la livraison sur site selon les modalités convenues.
              </Paragraph>
            </div>

            <div>
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">5.2 Réception</H3>
              <Paragraph className="text-gray-700">
                Le client dispose de 8 jours ouvrables à compter de la livraison pour formuler des réserves écrites. 
                Passé ce délai, les biens sont réputés conformes et acceptés définitivement.
              </Paragraph>
            </div>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">6. Garanties</H2>
            
            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.1 Garantie légale</H3>
              <Paragraph className="text-gray-700">
                Derjani Group garantit ses prestations et fournitures contre tout vice de conception, de fabrication ou de matière pendant une période de 12 mois à compter de la réception.
              </Paragraph>
            </div>

            <div className="mb-6">
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.2 Exclusions de garantie</H3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Usure normale des équipements</li>
                <li>Mauvaise utilisation ou entretien défaillant</li>
                <li>Modifications apportées par le client ou des tiers</li>
                <li>Force majeure ou cas fortuits</li>
              </ul>
            </div>

            <div>
              <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.3 Mise en œuvre de la garantie</H3>
              <Paragraph className="text-gray-700">
                La garantie s'exerce par la réparation ou le remplacement gratuit des éléments défectueux, 
                à l'exclusion de tout autre dédommagement.
              </Paragraph>
            </div>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">7. Responsabilité</H2>
            <Paragraph className="text-gray-700 mb-4">
              La responsabilité de Derjani Group est limitée aux dommages directs et ne peut excéder le montant du contrat. 
              Sont expressément exclus les dommages indirects tels que :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Perte d'exploitation ou de chiffre d'affaires</li>
              <li>Perte de clientèle ou de profits</li>
              <li>Trouble commercial quelconque</li>
            </ul>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">8. Force majeure</H2>
            <Paragraph className="text-gray-700">
              Sont considérés comme cas de force majeure tous faits ou circonstances irrésistibles, extérieurs aux parties, 
              imprévisibles et indépendants de leur volonté. La partie affectée devra notifier la survenance d'un tel événement dans les 15 jours.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">9. Propriété intellectuelle</H2>
            <Paragraph className="text-gray-700 mb-4">
              Derjani Group demeure propriétaire de tous ses droits de propriété intellectuelle sur :
            </Paragraph>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Les études, dessins, plans et méthodes développés</li>
              <li>Les savoir-faire et techniques utilisés</li>
              <li>Les logiciels et outils développés</li>
            </ul>
            <Paragraph className="text-gray-700 mt-4">
              Le client s'interdit toute reproduction, représentation ou exploitation de ces éléments sans autorisation écrite préalable.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">10. Confidentialité</H2>
            <Paragraph className="text-gray-700">
              Les parties s'engagent à préserver la confidentialité de toutes les informations échangées dans le cadre de leur relation commerciale. 
              Cet engagement perdure 5 ans après la fin des relations contractuelles.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">11. Résiliation</H2>
            <Paragraph className="text-gray-700 mb-4">
              En cas de manquement grave de l'une des parties à ses obligations, l'autre partie peut résilier le contrat de plein droit après mise en demeure restée infructueuse pendant 30 jours.
            </Paragraph>
            <Paragraph className="text-gray-700">
              La résiliation n'affecte pas les créances nées antérieurement à sa prise d'effet.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">12. Protection des données</H2>
            <Paragraph className="text-gray-700">
              Le traitement des données personnelles s'effectue conformément à notre 
              <a href="/politique-confidentialite" className="text-bordeaux-500 hover:underline ml-1">Politique de Confidentialité</a>, 
              partie intégrante des présentes CGV.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">13. Droit applicable et litiges</H2>
            <Paragraph className="text-gray-700 mb-4">
              Les présentes CGV sont soumises au droit libanais. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux de Beyrouth.
            </Paragraph>
            <Paragraph className="text-gray-700">
              Préalablement à tout recours contentieux, les parties s'efforcent de résoudre amiablement leurs différends. 
              À défaut, elles peuvent recourir à la médiation ou à l'arbitrage.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">14. Dispositions générales</H2>
            <Paragraph className="text-gray-700 mb-4">
              Si une disposition des présentes CGV était déclarée nulle ou inapplicable, 
              les autres dispositions conserveraient toute leur force et leur portée.
            </Paragraph>
            <Paragraph className="text-gray-700">
              Les présentes CGV annulent et remplacent toutes conditions antérieures. 
              Elles ne peuvent être modifiées que par avenant écrit et signé par les deux parties.
            </Paragraph>
          </section>

          <section>
            <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">15. Contact</H2>
            <Paragraph className="text-gray-700">
              Pour toute question relative aux présentes CGV :
            </Paragraph>
            <div className="mt-4 text-gray-700">
              <p><strong>Derjani Group S.A.R.L</strong></p>
              <p>Email : <a href="mailto:contact@derjanigroup.com" className="text-bordeaux-500 hover:underline">contact@derjanigroup.com</a></p>
              <p>Adresse : Beyrouth, Liban</p>
              <p>Téléphone : +961 [numéro à préciser]</p>
            </div>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}