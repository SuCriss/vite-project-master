export default function logger({ store }) {
  store.$subscribe((mutation, state) => {
    console.log(`Mutation: ${mutation.type}`);
    console.log('New State:', state);
  });
} 