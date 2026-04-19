class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

/**
 * Prefix tree supporting insert, exact search, and prefix search.
 */
export class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this.traverse(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this.traverse(prefix) !== null;
  }

  private traverse(s: string): TrieNode | null {
    let node = this.root;
    for (const ch of s) {
      if (!node.children.has(ch)) return null;
      node = node.children.get(ch)!;
    }
    return node;
  }
}
