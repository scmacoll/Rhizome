<h1 class="text-3xl font-bold p-2">Rhizome</h1>
<div class="py-4"></div>
<div class="overflow-hidden">
  <table class="text-xs table-auto table-xs w-fit">
    <!-- head -->
    <thead>
    <tr class="border-black text-center uppercase">
      <th class="border-y border-r border-black">_|</th>
      <th class="border-y border-r border-black">A</th>
      <th class="border-y border-r border-black">B</th>
      <th class="border-y border-r border-black">C</th>
      <th class="w-6 border-primary border-dotted border-r"></th>
      <th class="w-6"></th>
      <th class="border-y border-x border-black">A</th>
    </tr>
    </thead>
    <tbody>
    <!-- row 1 -->
    <tr class="font-bold text-center">
      <th class="text-start font-normal text-xs border-r border-b border-black">N4J</th>
      <td class="border-r border-b border-black">Label</td>
      <td class="border-r border-b border-black">Properties</td>
      <td class="border-r border-b border-black">Relationship</td>
      <th class="w-6 border-primary border-dotted border-r"></th>
      <th class="w-6"></th>
      <td class="border-x border-b border-black">Cypher</td>
    </tr>
    <!-- row 1 -->
    <tr class="">
      <th class="bg-base-200 text-start border-r border-b border-black">1</th>
      <td class="bg-base-200 border-r border-b border-black">Cy Ganderton</td>
      <td class="bg-base-200 border-r border-b border-black">Quality Control Specialist</td>
      <td class="bg-base-200 border-r border-b border-black">Blue</td>
      <th class="w-6 border-primary border-dotted border-r"></th>
      <th class="w-6"></th>
      <td class="bg-base-200 border-x border-b border-black">
        CREATE (john:Person &123;name: 'John', age: 30&125;)
        CREATE (alice:Person &123;name: 'Alice', age: 25&125;)
        CREATE (john)-[:KNOWS]->(alice)
        CREATE (alice)-[:KNOWS]->(john)
      </td>
    </tr>
    <!-- row 2 -->
    <tr class="">
      <th class="text-start border-r border-b border-black">2</th>
      <td class="border-r border-b border-black">Hart Hagerty</td>
      <td class="border-r border-b border-black">Desktop Support Technician</td>
      <td class="border-r border-b border-black">Purple</td>
      <th class="w-6 border-primary border-dotted border-r"></th>
      <th class="w-6"></th>
    </tr>
    <!-- row 3 -->
    <tr class="">
      <th class="bg-base-200 text-start border-r border-b border-black">3</th>
      <td class="bg-base-200 border-r border-b border-black">Brice Swyre</td>
      <td class="bg-base-200 border-r border-b border-black">Tax Accountant</td>
      <td class="bg-base-200 border-r border-b border-black">Red</td>
      <th class="w-6 border-primary border-dotted border-r"></th>
      <th class="w-6"></th>
    </tr>
    </tbody>
  </table>
</div>

<style lang="postcss">

</style>