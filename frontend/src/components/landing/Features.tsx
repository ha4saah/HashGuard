import Container from "@/components/common/Container";
import FeatureCard from "@/components/landing/FeatureCard";

import {
  ShieldCheck,
  Fingerprint,
  Files,
  ScanSearch,
} from "lucide-react";

export default function Features() {
  return (
    <section className="pb-32">
      <Container>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <FeatureCard
            icon={Fingerprint}
            title="SHA-256"
            description="Generate secure cryptographic hashes for any file instantly."
          />

          <FeatureCard
            icon={ShieldCheck}
            title="Verification"
            description="Verify file integrity and detect unauthorized modifications."
          />

          <FeatureCard
            icon={Files}
            title="Comparison"
            description="Compare multiple files using cryptographic fingerprints."
          />

          <FeatureCard
            icon={ScanSearch}
            title="Threat Lookup"
            description="Check file hashes against VirusTotal in one click."
          />

        </div>

      </Container>
    </section>
  );
}