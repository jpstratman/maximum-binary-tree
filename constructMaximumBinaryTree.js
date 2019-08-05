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
    
    for (let i = 1; i < nums.length; i++) {
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
        
        let parentNode = tree;
        let nextNode = tree.right;
        
        while (true) {
            if (!nextNode || currentValue > nextNode.val) {
                newNode.left = nextNode;
                parentNode.right = newNode;
                break;
            }
            
            parentNode = nextNode;
            nextNode = nextNode.right;
        }
    }
    
    return tree;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
