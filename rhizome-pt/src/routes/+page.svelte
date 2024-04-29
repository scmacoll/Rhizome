<h1 class="text-3xl font-bold p-2">Rhizome</h1>
<div class="py-4"></div>
<div class="overflow-hidden">
  <table class="text-xs table-auto table-xs w-fit">
    <!-- head -->
    <thead>
    <tr class="border-opacity-30 border-base-content text-center uppercase text-neutral-content">
      <th class="bg-neutral border-y border-r border-opacity-30 border-base-content">_|</th>
      <th class="bg-neutral border-y border-r border-opacity-30 border-base-content ">A</th>
      <th class="bg-neutral border-y border-r border-opacity-30 border-base-content ">B</th>
      <th class="bg-neutral border-y border-r border-opacity-30 border-base-content ">C</th>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <th class="bg-neutral border-y border-x border-opacity-30 border-base-content ">A</th>
    </tr>
    </thead>
    <tbody>
    <!-- row 1 -->
    <tr class="font-bold text-center">
      <th class="text-start font-normal text-xs border-r border-b border-opacity-30 border-base-content ">N4J</th>
      <td class=" border-r border-b border-opacity-30 border-base-content ">Label</td>
      <td class="border-r border-b border-opacity-30 border-base-content ">Properties</td>
      <td class="border-r border-b border-opacity-30 border-base-content ">Relationship</td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="border-x border-b border-opacity-30 border-base-content ">Cypher</td>
    </tr>
    <!-- row 1 -->
    <tr class="text-neutral-content">
      <th class="bg-neutral text-start border-r border-b border-opacity-30 border-base-content">1</th>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Cy Ganderton</td>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Quality Control Specialist</td>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Blue</td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="bg-neutral border-x border-b border-opacity-30 border-base-content text-center hover:bg-gray-500 hover:bg-opacity-20">
        CREATE (john:Person &123;name: 'John', age: 30&125;)
        CREATE (alice:Person &123;name: 'Alice', age: 25&125;)
        CREATE (john)-[:KNOWS]->(alice)
        CREATE (alice)-[:KNOWS]->(john)
      </td>
    </tr>
    <!-- row 2 -->
    <tr class="">
      <th class="text-start border-r border-b border-opacity-30 border-base-content">2</th>
      <td class="border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Hart Hagerty</td>
      <td class="border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Desktop Support Technician</td>
      <td class="border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Purple</td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="border-x border-b border-opacity-30 border-base-content text-center opacity-0">
      </td>
    </tr>
    <!-- row 3 -->
    <tr class="text-neutral-content">
      <th class="bg-neutral text-start border-r border-b border-opacity-30 border-base-content">3</th>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Brice Swyre</td>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Tax Accountant</td>
      <td class="bg-neutral border-r border-b border-opacity-30 border-base-content hover:bg-gray-500 hover:bg-opacity-20">Red</td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="bg-neutral border-x border-b border-opacity-30 border-base-content text-center">
        <p class="opacity-0"></p>
      </td>
    </tr>
    </tbody>
    <tfoot>

    </tfoot>
  </table>
</div>

<style lang="postcss">

</style>