## Linked List

A linked list is simply a squence of nodes, where each node points to the next node. The main benefit of using a linked list is that it is really easy to add a new node to the front of the list. You simply point the new node to the head of the list, therefore it's done in constant time! The downside is that looking up a particular node at the nth index means iterating through _n_ number of nodes, so lookup has an _O(n)_ runtime.

