// Problem 6:

interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (
  profile: Profile,
  myUpdates: Partial<Profile>
): Profile => {
  return { ...profile, ...myUpdates };
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log( updateProfile( myProfile, { age: 26 } ));