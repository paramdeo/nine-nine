/*
Write a SocialGraph class with a constructor and two methods.

- The constructor creates an empty Map.
- The addFollow method records that user1 follows user2 by updating the map. Note that order matters here
- The follows method checks for whether user1 follows user2, returning a boolean.
*/

interface SocialGraph {
  map: Map<string, string[]>
}

class SocialGraph {
  constructor() {
    this.map = new Map()
  }

  addFollow(user1: string, user2: string) {
    // If user2 isn't present, create a user2 key in the map
    if (!this.map.has(user2)) {
      this.map.set(user2, [])
    }
    // Get the array of users of user1, and add user1
    this.map.get(user2).push(user1)
  }

  follows(user1: string, user2: string) {
    // If user2 doesn't exist, return false
    if (!this.map.has(user2)) { return false }
    // Otherwise get the array of users of user2, and check if it includes user1
    return this.map.get(user2).includes(user1)
  }
}

const socialGraph = new SocialGraph();
socialGraph.addFollow('amir', 'betty');
socialGraph.addFollow('amir', 'cindy');
socialGraph.addFollow('betty', 'cindy');

console.log(
  [
  socialGraph.follows('amir', 'betty'),
  socialGraph.follows('amir', 'cindy'),
  socialGraph.follows('betty', 'amir'),
  socialGraph.follows('betty', 'cindy'),
  socialGraph.follows('cindy', 'amir'),
  socialGraph.follows('cindy', 'betty'),
]) // [true, true, false, true, false, false]
