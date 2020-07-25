const lycanthrope = [
  ["sleeping", "eats pizza"],
  ["bathing", "studies at home"],
  ["eats bread", "watches a movie"],
  ["eats burger", "eats lemon"],
  ["eats pizza", "goes to church"],
  ["visits shade", "goes out with his friends"],
  ["see a movie", "visits uncle"],
  ["dances out", "praying"],
  ["sleeping", "eats pizza"],
  ["bathing", "goes to school"],
  ["eats bread", "goes out with friends"],
  ["eats pizza", "studies"],
  ["sleeping", "goes to church"],
  ["visits his babe", "goes surfing"],
]

for( let i =0; i < lycanthrope.length; i++){
    if (lycanthrope[i].includes("eats pizza")){
        console.log("Jacques Changes Today")
    } else{
        console.log(" Nothing happens to Jacques today")
    }
}