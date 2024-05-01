<h1 class="text-3xl font-bold p-2">Rhizome</h1>
<div class="py-4"></div>
<div class="overflow-hidden">
  <table class="border-collapse text-xs table-auto table-xs w-fit">
    <!-- head -->
    <thead class="">
    <tr class="border-opacity-30 border-base-content text-center uppercase text-neutral-content">
      <th class="border bg-neutral border-opacity-50 border-base-content">in</th>
      <th class="border border-b-4 border-base-content bg-neutral border-opacity-50">A</th>
      <th class="border border-b-4 bg-neutral border-opacity-50 border-base-content">B</th>
      <th class="border border-b-4 bg-neutral border-opacity-50 border-base-content">C</th>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <th class="border border-b-4 bg-neutral border-opacity-50 border-base-content">output</th>
    </tr>
    </thead>
    <tbody>
    <tr class="font-bold text-center">
      <th class="text-start font-normal text-xs border border-r-4 border-opacity-50 border-base-content bg-primary text-primary-content">N4J</th>
      <td class="border border-opacity-50 border-base-content">Label</td>
      <td class="border border-opacity-50 border-base-content">Properties</td>
      <td class="border border-opacity-50 border-base-content">Relationship</td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="border border-opacity-50 border-base-content">Cypher</td>
    </tr>
    <!-- row 1 -->
    <tr class="text-neutral-content">
      <th class="bg-neutral text-start border-r-4 border-opacity-50 border-base-content">1</th>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="py-2 bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <code class="">
          CREATE (john:Person &123;name: 'John', age: 30&125;)<br>
          CREATE (alice:Person &123;name: 'Alice', age: 25&125;)<br>
          CREATE (john)-[:KNOWS]->(alice)<br>
          CREATE (alice)-[:KNOWS]->(john)</code>
      </td>
    </tr>
    <!-- row 2 -->
    <tr class="">
      <th class="text-start border-r-4 border-opacity-50 border-base-content">2</th>
      <td class="border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="border-x border-opacity-50 border-base-content text-center opacity-0">
      </td>
    </tr>
    <!-- row 3 -->
    <tr class="text-neutral-content">
      <th class="bg-neutral text-start border-r-4 border-opacity-50 border-base-content">3</th>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <td class="bg-neutral border-x border-opacity-50 border-base-content hover:bg-gray-500 hover:bg-opacity-20">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <th class="w-6 border-r border-base-content border-opacity-70"></th>
      <th class="w-6"></th>
      <td class="bg-neutral border-x border-opacity-50 border-base-content text-center">
        <p class="opacity-0"></p>
      </td>
    </tr>
    <!-- last row -->
    <tr class="text-neutral-content">
      <th class="border-t border-opacity-50 border-base-content"></th>
      <td class="border-t border-opacity-50 border-base-content">
      </td>
      <td class="border-t border-opacity-50 border-base-content">
      </td>
      <td class="border-t border-opacity-50 border-base-content">
        <input type="text" placeholder="" class="cell"/>
      </td>
      <th class="w-6"></th>
      <th class="w-6"></th>
      <td class="border-t border-opacity-50 border-base-content">
        <p class="opacity-0"></p>
      </td>
    </tr>
    </tbody>
    <tfoot>

    </tfoot>
  </table>
</div>

<style lang="postcss">

  .cell {
      /* Focus styles */
      --tw-ring-opacity: 0;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: rgba(229, 231, 235, 0);

      /* Text styling */
      font-size: 0.75rem; /* equivalent to text-xs */
      font-weight: normal; /* equivalent to font-normal */

      /* Background opacity */
      background-color: rgba(0, 0, 0, 0); /* equivalent to bg-opacity-0 */

      /* Width settings */
      width: 100%; /* equivalent to w-full */
      max-width: 20rem; /* equivalent to max-w-xs */
  }

</style>