<script>
  import GameItem from "./GameItem.svelte";
</script>

<div class="rest bg-dark-500 flex-auto text-white p-8 py-16">
  <div class="max-w-screen-md mx-auto">
    <div class="heading mb-8">
      <h1 class="text-3xl font-semibold">Choose your game</h1>
      <p class="text-gray-500 mt-2">
        To continue, pick your game and the coaching service you need.
      </p>
    </div>
    <div class="games flex flex-col space-y-6">
      <GameItem />
      <GameItem opacity={"opacity-30"} />
      <GameItem opacity={"opacity-30"} />
      <GameItem opacity={"opacity-30"} />
    </div>
  </div>
</div>
