
export const items = ['início', 'sobre', 'projetos', 'aprendizado', 'contato'];

export type Item = (typeof items)[number];

// Mapeamento dos nomes em português para IDs das seções
export const itemIds: Record<string, string> = {
  'início': 'home',
  'sobre': 'about',
  'projetos': 'projects',
  'aprendizado': 'learning',
  'contato': 'contact'
};