/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Specs } from './components/Specs';
import { ModelExplorer } from './components/ModelExplorer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#FACC15] selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ModelExplorer />
        <Specs />
      </main>
      <Footer />
    </div>
  );
}
