/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let tree = new TreeNode(nums[0]);
    let i, currentValue, newNode, parentNode, nextNode;
    
    for (i = 1, l = nums.length; i < l; i++) {
        currentValue = nums[i];
        newNode = new TreeNode(currentValue)
        
        if (currentValue > tree.val) {
            newNode.left = tree;
            tree = newNode;
            continue;
        }
        
        if (!tree.right) {
            tree.right = newNode;
            continue;
        }
        
        parentNode = tree;
        nextNode = tree.right;
        
        do {
            if (!nextNode) {
                parentNode.right = newNode;
                break;
            }
            
            if (currentValue > nextNode.val) {
                newNode.left = nextNode;
                parentNode.right = newNode;
                break;
            }
            
            parentNode = nextNode;
            nextNode = nextNode.right;
        } while (true);
    }
    
    return tree;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
