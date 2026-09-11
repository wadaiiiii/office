export const databaseSchema = {
  users: {
    id: 'uuid',
    name: 'text',
    email: 'text',
    role: 'participant | instructor | admin'
  },
  modules: {
    id: 'uuid',
    title: 'text',
    description: 'text'
  },
  progress: {
    user_id: 'uuid',
    module_id: 'uuid',
    completion: 'number',
    score: 'number'
  },
  certificates: {
    user_id: 'uuid',
    issued_at: 'timestamp'
  }
};
