<script lang="ts">
  import { slide } from "svelte/transition";

  interface Learning {
    title: string;
    description: string;
    date: string;
  }

  const learnings: Learning[] = [
    {
      title: "Cibersegurança e Ethical Hacking",
      description:
        "formação completa com Hackers Do Bem, incluindo nivelamento e curso básico em cybersecurity.",
      date: "2025-01",
    },
    {
      title: "React e Next.js Avançado",
      description:
        "desenvolvendo aplicações modernas com SSR, otimização de performance e melhores práticas.",
      date: "2024-12",
    },
    {
      title: "Inteligência Artificial e IA Generativa",
      description:
        "trilha fluêncIA, IA fundamentals, ética em IA e aplicações práticas com NTT DATA.",
      date: "2024-11",
    },
    {
      title: "Node.js e TypeScript",
      description:
        "debugging avançado, typescript para devs node.js, introdução ao node e desenvolvimento de APIs.",
      date: "2024-10",
    },
    {
      title: "Git e GitHub",
      description:
        "versionamento de código, integração contínua e boas práticas de colaboração em equipe.",
      date: "2024-09",
    },
    {
      title: "Python Essentials",
      description:
        "python essentials 1 e 2, fundamentos sólidos para desenvolvimento backend e automação.",
      date: "2024-08",
    },
    {
      title: "Programação Orientada a Objetos",
      description:
        "introdução à POO, conceitos fundamentais e aplicações práticas em diferentes linguagens.",
      date: "2024-07",
    },
    {
      title: "JavaScript Essentials",
      description:
        "fundamentos de JavaScript para desenvolvimento web moderno e aplicações interativas.",
      date: "2024-06",
    },
    {
      title: "Geoprocessamento com QGIS",
      description:
        "análise espacial, criação de mapas interativos e integração com sistemas web usando Leaflet.",
      date: "2024-05",
    },
    {
      title: "FastAPI e Flask",
      description:
        "desenvolvimento de APIs REST performáticas e escaláveis com Python.",
      date: "2024-04",
    },
    {
      title: "AWS e Azure Cloud",
      description:
        "Lambda, S3, SQS, KMS, Fargate, RabbitMQ, RDS e EC2 para infraestrutura cloud.",
      date: "2024-03",
    },
    {
      title: "Tailwind CSS e Bootstrap",
      description:
        "frameworks CSS para desenvolvimento rápido de interfaces responsivas e modernas.",
      date: "2024-02",
    },
  ];

  function formatDate(date: string) {
    return new Date(date)
      .toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
      })
      .toLowerCase();
  }

  let showAll = false;

  $: shownLearnings = showAll ? learnings : [...learnings].slice(0, 3);
</script>

<div class="relative isolate overflow-hidden bg-background">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div id="learning" class="py-16 md:py-32 section">
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-base-800 dark:text-base-100 sm:text-5xl"
        >
          sempre aprendendo
        </h1>
        <p class="mt-6 text-base text-base-600 dark:text-base-400">
          uma das coisas que mais amo na programação é que sempre há
          algo novo para aprender. aqui está uma seleção de algumas das coisas que tenho
          aprendido recentemente:
        </p>
      </div>
      <div
        class="mt-16 md:border-l md:border-base-100 md:pl-6 md:dark:border-base-700/40"
      >
        <div class="flex max-w-3xl flex-col space-y-16">
          {#each shownLearnings as learning}
            <article
              transition:slide
              class="md:grid md:grid-cols-4 md:items-baseline"
            >
              <div
                class="group relative flex flex-col items-start md:col-span-3"
              >
                <div
                  class="text-base font-semibold tracking-tight text-base-800 dark:text-base-100"
                >
                  {learning.title}
                </div>
                <div
                  class="relative z-10 order-first mb-3 flex items-center text-sm text-base-400 dark:text-base-500 pl-3.5 mt-1 md:hidden"
                >
                  <span
                    class="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span
                      class="h-4 w-0.5 rounded-full bg-base-200 dark:bg-base-500"
                    />
                  </span>
                  {formatDate(learning.date)}
                </div>

                <p
                  class="relative z-10 mt-2 text-sm text-base-600 dark:text-base-400"
                >
                  {learning.description}
                </p>
              </div>
              <div
                class="relative z-10 order-first mb-3 items-center text-sm text-base-400 dark:text-base-500 mt-1 hidden md:block"
              >
                {formatDate(learning.date)}
              </div>
            </article>
          {/each}

          {#if !showAll}
            <div class="justify-center flex">
              <button
                on:click={() => (showAll = true)}
                type="button"
                class="group flex items-center rounded-full mr-4 bg-white/90 px-4 py-2 text-sm font-medium text-base-800 shadow-lg shadow-base-800/5 ring-1 ring-base-900/5 backdrop-blur dark:bg-white/5 dark:text-base-200 dark:ring-white/10 dark:hover:ring-white/20"
                aria-label="Mostrar mais"
              >
                mostrar mais

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="ml-2 h-auto w-4 stroke-base-500 group-hover:stroke-base-700 dark:group-hover:stroke-base-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
