/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(2(n * m)) -> O(n * m), n = numsA.length, m = numsB.length the two
 *    constant 2 was because we are doing the n * m twice. The constant 2 is
 *    dropped.
 * - Space:  O(n + m) because potentially all items from each are kept.
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */ //                         o(n)   o(m)
function symmetricDifferences(numsA, numsB) 
{
    const disjunctiveUnion = [];
    // o(n)
    for (const n of numsA) {
        //           o(n)              +                        o(n)
        if (numsB.includes(n) === false && disjunctiveUnion.includes(n) === false) {
                            //o(1)
            disjunctiveUnion.push(n);
        }
    }
    // o(m)
    for (const n of numsB) {
                    //o(m)                                    // o(m+n)
        if (numsA.includes(n) === false && disjunctiveUnion.includes(n) === false) {
                            //o(1)
            disjunctiveUnion.push(n);
        }
    }
    /* o(n2)

    ->
    return disjunctiveUnion;
}
















/**
 * - Time: O(2(n + m)) -> O(n) linear, n = numsA.length, m = numsB.length.
 *    Each is looped over twice, once from the arr then again over it's seen
 *    hash table.
 * - Space: O(2(n + m)) -> O(n) linear. Each arr is stored twice, once in it's
 *    own seen table and once in the output array.
 */

function symmetricDifferencesHashTable(numsA, numsB) {
    const seenA = {};
    const seenB = {};
    const disjunctiveUnion = [];

    // O(n)
    for (const num of numsA) {
        // adding the num as the value avoids having to convert the string key back to int
        // O(1) - constant can be ignored. This happens n times.
        seenA[num] = num;
    }

    // O(m)
    for (const num of numsB) {
        // O(1) - constant can be ignored. This happens m times.
        seenB[num] = num;
    }

    // O(n) - could be smaller because of dicts not storing dupes, but if no
    // dupes it's same length.
    for (const key in seenA) {
        // O(1)
        if (seenB.hasOwnProperty(key) === false) {
            // O(1)
            disjunctiveUnion.push(seenA[key]);
        }
    }

    // O(m)
    for (const key in seenB) {
        // O(1)
        if (seenA.hasOwnProperty(key) === false) {  
            // O(1)
            disjunctiveUnion.push(seenB[key]);
        }
    }
    return disjunctiveUnion;
    /* 
        Add all the O notations (multiple for things inside loops) but ignore the constants.
        O(n) + O(m) + O(n) + O(m) -> 
        O(2n) + O(2m) -> 
        O(2(n + m))
        Drop the constant 2 and n + m is still linear: O(n) simplified.
      */
}
