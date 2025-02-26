export const metadata = {
  title: 'The Case for Global QC Governance',
  publishDate: new Date(Date.UTC(2025, 1, 26)),
};


export default function Post({}) {
  return (
    <div className="flex flex-col gap-1 px-3 py-3 font-serif">
      <h1 className="font-bold text-3xl">The Case for Global Quantum Computing Governance</h1>
      <p className="mb-2"><span className="font-bold">Date published:</span>  {metadata.publishDate.toLocaleDateString("en-GB")}</p>
      <p className="tracking-wide">
        Recently, Microsoft announced their Majorana 1 chip, promising that it will solve meaningful and industrial-scale
        problems in &quot;years not decades&quot;.
        Quantum computing isn&apos;t just another tech breakthrough - its a major paradigm shift capable of breaking
        current encryption protocols, reshaping industries like finance, material science and chemical engineering and
        creating economic and national security risks if left unchecked.
        And perhaps we should heed Uncle Ben&apos;s advice, &quot;With great power comes great responsibility&quot;,
        before legislation ends up playing a game of catch-up that is all too common: rules and regulations surrounding AI
        came too late, and arguably still haven&apos;t reached the level of maturity they should have by now. If regulations
        lags behind innovation as it tends to, what fate does quantum computing have in store?
      </p>
      <h2 className="mt-2 font-bold text-2xl">The Encryption Crisis</h2>
      <p className="tracking-wide">
        The internet as we know it relies heavily on the shoulders of encryption - banking, messages, emails and more. Such a
        heavy reliance on crytographic security to protect data from unauthorised access was considered acceptable, but this might
        be changing. Without going too deep into the mathematics, most encryption nowadays relies on public-key cryptography, which
        depend on the computational difficulty of solving certain mathematical problems: RSA relies on the difficulty in factoring large
        numbers, and ECC depends on the difficulty of the elliptic curve discrete logarithm problem. A classical computer would need
        millions of years to crack these encrytions, but the emergence of quantum algorithms renders them useless; although there is no
        known classical algorithm that can factor integers in polynomial time, Shor&apos;s algorithm is a quantum algorithm, originally
        developed by American mathematician Peter Shor in 1994, capable of factorising integers in polynomial time, making RSA an 
        obsolete cryptographic standard.
      </p>
      <h2 className="mt-2 font-bold text-2xl">Harvest Now, Decrypt Later</h2>
      <p className="tracking-wide">
        Harvest Now, Decrypt Later (HNDL), also known as retrospective decryption, is an emerging strategy among bad actors. It relies on the arrival
        of a doomsday - a Q-Day, where it becomes possible to decrypt data originally encrypted with classical algorithms such as RSA, due to 
        capable quantum computers. Hackers will intercept or access encrypted data, simply storing it to be decrypted at a later date: in fact,
        this should be a significant worry among some organisations. Although there are a few possible mitigation strategies 
        for an attack of this type, I&apos;d like to discuss the adoption and implementation of Post-Quantum Cryptography (PQC). This refers to
        the implementation of encyption algorithms that are considered secure in a world where quantum computers are easily accessible. In 2024,
        the NIST finalised 3 standards known as FIPS (Federal Information Processing Standard) 203, 204 and 205. There is a fourth algorithm known
        as FALCON expected to be standardised in FIPS 206. The NIST Mathematician, Dustin Moody, who leads the PQC standardisation project urged
        organisations to start adopting these standards, and not wait for future standards. As of yet, no other governments have published PQC
        standards, with some, such as the UK, choosing to add the NIST-chosen algorithms (ML-KEM, ML-DSA and SLH-DSA) to their own PQC whitepaper.
      </p>
      <h2 className="mt-2 font-bold text-2xl">The Current State of Affairs</h2>
      <p className="tracking-wide">
        Some legislatures have started laying the groundwork for regulation in quantum computing, however there is still a lack of global
        co-ordination. Furthermore, much regulation around the topic is merely suggestive, recommending that organisations implement PQC.
      </p>
      <h3 className="mt-2 font-bold">United States of America</h3>
      <p className="tracking-wide">
        In the USA, through the passing of the Quantum Computing Cybersecurity Preparedness Act (H.R.7535) in 2022, all federal agencies were
        required to migrate to PQC.
        The CBO estimated that this would cost around $1 million in a period of 5 years from 2022 to 2027. This came almost 4 years after the
        National Quantum Initiative Act (H.R.6227) in 2018, which established a national strategy for quantum information science (QIS) research in
        the US. President Trump signed for $1.2 billion of funding to be provided from 2018 to 2023, to accelerate QIS research in
        federal agencies, industrial partners and research institutes. This was further supplemented by the National Quantum Initiative
        Reauthorization Act (H.R.6213) of 2024, which allocated a further $2.7 billion until 2029, to expand and enhance the work done as a result
        of the NQI Act 2018. The current landscape of legislation in the USA has both positives and negatives. It is clear that the American government
        recognises the need to invest in QC and develop it further - and there are laws focusing on this; however, where America falls short is regulation.
        Regulating government agencies is a good first step, but with an ever-growing threat to encrypted communication, all internet transmission
        could be compromised. It is, however, true that America doesn&apos;t exclusively use the internet, and for secure global communication, there needs to be global
        coordination.
      </p>
      <h3 className="mt-2 font-bold">European Union</h3>
      <p className="tracking-wide">
        At present, it seems that EU is taking a more unified approach to the adoption of quantum computing, with the proposal of The European Quantum
        Act. Henna Virkkunen is the Executive Vice-President for Tech Sovereignty, Security and Democracy in the European Commission. During her
        confirmation hearing to be appointed this role, Virkkunen highlighted that even though Europe has access to world-class QIS researchers and facilities
        the lack of international coordination causes the market to remain fragmented, and consequently, she proposed a comprehensive and unifying quantum
        strategy to be adopted by EU member states. She seeks to position a unified Europe as a global leader in the field of quantum innovation. The
        European Declaration on Quantum Technologies introduced in December 2023, a year before Virkunnen&apos;s confirmation hearing, has already laid the
        groundwork for her vision, as its key objectives are to foster a world-class quantum ecosystem, by aligning European, national and regional research
        and development efforts. Going back even further, in 2019, the EU launched the European Quantum Communication Infrastructure (EuroQCI) Initiative. The
        idea is for the EuroQCI to be a secure quantum communication infrastructure spanning the whole EU. This will be done in collaboration with all 27 member
        states and the ESA, where a terrestial segment will be setup linking locations at a national level, as well as a space segment using satellites. The
        EuroQCI is intended to be a part of IRIS2, the EU&apos;s planned secure space-based communication system. It is evident that the EU lacks any regulation over
        quantum computing and its applications, especially in terms of PQC. The only mention of PQC seems to be in a mere recommendation published by the European
        Commission in April 2024 and an announcement from 18 out of 27 member states that &quot;preparing for the quantum threat should be considered an integral
        aspect of cybersecurity risk management&quot; but with no concrete steps laid out - this is simply a call for action. Once again, the need to invest in the
        research and development of quantum computing has been identified and worked on, but when it comes to security, mere recommendations will not cut it: concrete
        and constructive steps need to be taken immediately.
      </p>
      <h3 className="mt-2 font-bold">United Kingdom</h3>
      <p className="tracking-wide">
        Not much has been said in terms of PQC implementation by the UK government. The National Cyber Security Council has published a whitepaper on the topic, and also
        addressed it in their 2024 Annual Review. In this annual review, the NCSC acknowledges the threat that quantum computers pose to cryptography, accepting that the UK&apos;s
        critical national infrastructure needs to be protected. Essentially, the NCSC says that their main focus right now is to raise understanding and set examples of best
        practice by working with a small group of PQC consultancies until March 2025. After this, the NCSC plans to evaluate how they can best provide support and intervention
        to organisations in adopting PQC. Once again, there is a lack of stringent measures, but it is worth mentioning that the NCSC annual review succinctly highlights that
        implement PQC isn&apos;t something that can be done quickly - this will take many companies multiple investment cycles and a few years at least; arguably, this provides even
        more reason to mandate the shift to PQC as soon as possible.
      </p>
      <h2 className="mt-2 font-bold text-2xl">The Basis of Regulation</h2>
      <p className="tracking-wide">
        Obviously, this won&apos;t happen overnight, but there are a few pillars that regulations and laws about PQC would do well to cover. One of the largest risks when it comes to
        regulating technology like this is to restrict the wrong thing: legislation should affect the application of the technology, and not the technology itself. Here&apos;s what the
        rules should do:
      </p>
      <p  className="tracking-wide">
        <span className="font-bold">Mandate the adoption of PQC: </span>governments must set deadlines for organisations and companies, especially government organisations, to
        adopt PQC either by using the NIST standards or internally developing their own. In fact, it might even be a good idea, for non-compliance to carry penalties, since it can
        lead to privacy breaches if personal data is decrypted.</p>
      <p  className="tracking-wide">
        <span className="font-bold">Update laws to address HNDL attacks: </span>Currently, most legislation contains no reference to harvest now, decrypt later attacks, even though
        some reports state that rogue nation-states and organisations could already be executing them through methods such as BGP rerouting. This means amending laws such as the
        Computer Misuse Act in the UK and the Computer Fraud and Abuse Act in the USA. Other laws, such as the Economic Espionage Act in America and the Data Protection Act in the
        UK could also be affected.
      </p>
      <p className="tracking-wide">
        <span className="font-bold">Global transparency of developments: </span>Similar to nuclear non-proliferation treaties, major powers should ensure that developments in QC are
        kept transparent and not misused. This kind of international cooperation is critical to the safe adoption of quantum computing as a mainstream technology; otherwise, we run
        the risk of adversarial nations developing decryption capabilities in secret, which could have drastic consequences.
      </p>
      <p className="tracking-wide">
        <span className="font-bold">Control exports until global PQC adoptions: </span>This is something that has already been implemented by the US and the UK, however is yet to applied
        globally. If bad actors get their hands on quantum computers capable of RSA decryption or similar, it might encourage them to carry out HNDL attacks, or use the computational power
        for other malicious purposes. This risk will be greatly reduced as soon as PQC adoption becomes universal.
      </p>
      <h2 className="mt-2 font-bold text-2xl">A Quantum Arms Race</h2>
      <p className="tracking-wide">
        A lack of regulation can lead and inadvertently has led to some competition. Two key players in this are the USA and China, and the race for quantum dominance could be compared to
        the Cold War arms race, where analagous to the race for nuclear weapons, the battle is for development in quantum computing, encryption and communications. Both countries have made
        progress: China heavily invested in research through state funding and military-backed projects to develop the Micius Satellite (2016) which is the first quantum communication
        satellite, enabling unhackable quantum key distribution (QKD) over thousands of kilometres. China has also built the world&apos;s largest quantum-secured communication network, linking
        the cities of Beijing and Shanghai with QKD. In fact, the Chinese government has pledged over $15 billion for quantum research, dwarfing US federal funding. Conversely, the USA, which
        we&apos;ve already discussed in much detail remains a global leader in quantum hardware due to the presence of companies such as Google, Microsoft and IBM. It would be naive not to expect
        that there are classified projects being run by the DARPA, NSA and other federal agencies where quantum computing is being applied to cybersecurity and the military, but nothing major
        has been made public as of yet. As of now, no bad blood has emerged from these developments specifically, but the risk will always exist as long as collaboration isn&apos;t insisted upon.
        <br />
        <br />
        Therefore, we see how the lack of international quantum regulations could easily lead to countries hoarding breakthroughs instead of collaborating on secure quantum tech. The domino effect
        from this would be incessant: we could see espionage escalations, quantum monopolies, highly unpredictable military applications and so much more. The need for international cooperation,
        collaboration and regulatory frameworks is stark, and action is critical.
      </p>
    </div>
  )
}
