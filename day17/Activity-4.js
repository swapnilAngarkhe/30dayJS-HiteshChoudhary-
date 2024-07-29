//TASKS 7 and 8

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);

node1.right = node2
node1.left = node3

console.log(node1)



class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left !== null) {
                this.insertNode(root.left, newNode)
            }
            else {
                root.left = newNode
            }
        }
        else {
            if (root.right !== null) {
                this.insertNode(root.right, newNode)
            }
            else {
                root.right = newNode
            }
        }
    }

    inOrder(node) {
        if (node) {

            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);


tree.inOrder(tree.root);