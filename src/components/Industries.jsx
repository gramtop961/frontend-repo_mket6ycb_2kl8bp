import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';

const data = {
  Financial: [
    'AML & fraud detection with graph AI',
    'LLM copilots for analysts',
    'Risk scoring & portfolio simulation',
    'KYC automation',
  ],
  Healthcare: [
    'Clinical summarization & coding',
    'Prior auth & claims automation',
    'Patient experience copilots',
    'Medical imaging triage',
  ],
  Technology: [
    'Developer productivity agents',
    'AI QA and test generation',
    'Support automation & deflection',
    'Customer insights mining',
  ],
  Enterprise: [
    'Document intelligence at scale',
    'Knowledge retrieval & RAG',
    'Workflow orchestration',
    'Security & governance frameworks',
  ],
};

export default function Industries() {
  const keys = Object.keys(data);
  return (
    <section id="industries" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-light text-white">Industries</h2>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <Tabs defaultValue={keys[0]} className="w-full">
            <TabsList asChild>
              <div className="flex flex-wrap gap-2">
                {keys.map((k) => (
                  <TabsTrigger key={k} value={k} asChild>
                    <button className="px-4 py-2 rounded-md border border-white/15 text-white/80 data-[state=active]:bg-yellow-400/10 data-[state=active]:border-yellow-400/40 data-[state=active]:text-yellow-200">
                      {k}
                    </button>
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            {keys.map((k) => (
              <TabsContent key={k} value={k} asChild>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data[k].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-white/80">
                      <span className="mt-1 text-yellow-300">✨</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
