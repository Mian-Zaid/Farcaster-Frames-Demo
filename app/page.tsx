import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Goto Red Background"
    }
  ],
  image: `https://placehold.co/400/yellow/black?text=GreatApe+Frames+Yellow`,
  post_url: `https://farmes.vercel.app/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Great Ape',
  description: 'A frame Showing GreatApe written in Black with yellow background',
  openGraph: {
    title: 'Great Ape',
    description: 'A frame Showing GreatApe written in Black with yellow background',
    images: [`https://placehold.co/400/yellow/black?text=GreatApe+Frames+Yellow`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Frames Demo</h1>
    </>
  );
}