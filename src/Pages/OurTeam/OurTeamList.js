import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const teamMembers = [
  { sNo: 1, name: "John Doe", id: "R200001", role: "core", branch: "CSE", year: "E1" },
  { sNo: 2, name: "Jane Smith", id: "R200002", role: "accountant", branch: "IT", year: "E2" },
  { sNo: 3, name: "Alex Johnson", id: "R200003", role: "hr", branch: "ECE", year: "E3" },
  { sNo: 4, name: "Emily Davis", id: "R200004", role: "executive", branch: "EEE", year: "E4" },
  { sNo: 5, name: "Michael Brown", id: "R200005", role: "core", branch: "ME", year: "E1" },
  { sNo: 6, name: "Sarah Wilson", id: "R200006", role: "accountant", branch: "CSE", year: "E2" },
  { sNo: 7, name: "David Lee", id: "R200007", role: "hr", branch: "IT", year: "E3" },
  { sNo: 8, name: "Laura Clark", id: "R200008", role: "executive", branch: "ECE", year: "E4" },
  { sNo: 9, name: "Chris Evans", id: "R200009", role: "core", branch: "EEE", year: "E1" },
  { sNo: 10, name: "Olivia Taylor", id: "R200010", role: "accountant", branch: "ME", year: "E2" },
  { sNo: 11, name: "Liam Martinez", id: "R200011", role: "hr", branch: "CSE", year: "E3" },
  { sNo: 12, name: "Sophia Anderson", id: "R200012", role: "executive", branch: "IT", year: "E4" },
  { sNo: 13, name: "James Thomas", id: "R200013", role: "core", branch: "ECE", year: "E1" },
  { sNo: 14, name: "Isabella Jackson", id: "R200014", role: "accountant", branch: "EEE", year: "E2" },
  { sNo: 15, name: "Benjamin White", id: "R200015", role: "hr", branch: "ME", year: "E3" },
  { sNo: 16, name: "Mia Harris", id: "R200016", role: "executive", branch: "CSE", year: "E4" },
  { sNo: 17, name: "Noah Lewis", id: "R200017", role: "core", branch: "IT", year: "E1" },
  { sNo: 18, name: "Ava Walker", id: "R200018", role: "accountant", branch: "ECE", year: "E2" },
  { sNo: 19, name: "William Hall", id: "R200019", role: "hr", branch: "EEE", year: "E3" },
  { sNo: 20, name: "Emma Allen", id: "R200020", role: "executive", branch: "ME", year: "E4" },
  { sNo: 21, name: "Lucas Young", id: "R200021", role: "core", branch: "CSE", year: "E1" },
  { sNo: 22, name: "Charlotte King", id: "R200022", role: "accountant", branch: "IT", year: "E2" },
  { sNo: 23, name: "Henry Wright", id: "R200023", role: "hr", branch: "ECE", year: "E3" },
  { sNo: 24, name: "Amelia Scott", id: "R200024", role: "executive", branch: "EEE", year: "E4" },
  { sNo: 25, name: "Jack Green", id: "R200025", role: "core", branch: "ME", year: "E1" },
  { sNo: 26, name: "Evelyn Baker", id: "R200026", role: "accountant", branch: "CSE", year: "E2" },
  { sNo: 27, name: "Owen Adams", id: "R200027", role: "hr", branch: "IT", year: "E3" },
  { sNo: 28, name: "Abigail Nelson", id: "R200028", role: "executive", branch: "ECE", year: "E4" },
  { sNo: 29, name: "Elijah Hill", id: "R200029", role: "core", branch: "EEE", year: "E1" },
  { sNo: 30, name: "Harper Rivera", id: "R200030", role: "accountant", branch: "ME", year: "E2" },
  { sNo: 31, name: "Daniel Carter", id: "R200031", role: "hr", branch: "CSE", year: "E3" },
  { sNo: 32, name: "Ella Mitchell", id: "R200032", role: "executive", branch: "IT", year: "E4" },
  { sNo: 33, name: "Matthew Perez", id: "R200033", role: "core", branch: "ECE", year: "E1" },
  { sNo: 34, name: "Scarlett Roberts", id: "R200034", role: "accountant", branch: "EEE", year: "E2" },
  { sNo: 35, name: "Sebastian Turner", id: "R200035", role: "hr", branch: "ME", year: "E3" },
  { sNo: 36, name: "Grace Phillips", id: "R200036", role: "executive", branch: "CSE", year: "E4" },
  { sNo: 37, name: "Aiden Campbell", id: "R200037", role: "core", branch: "IT", year: "E1" },
  { sNo: 38, name: "Victoria Parker", id: "R200038", role: "accountant", branch: "ECE", year: "E2" },
  { sNo: 39, name: "Logan Evans", id: "R200039", role: "hr", branch: "EEE", year: "E3" },
  { sNo: 40, name: "Lily Edwards", id: "R200040", role: "executive", branch: "ME", year: "E4" },
  { sNo: 41, name: "Mason Collins", id: "R200041", role: "core", branch: "CSE", year: "E1" },
  { sNo: 42, name: "Aria Stewart", id: "R200042", role: "accountant", branch: "IT", year: "E2" },
  { sNo: 43, name: "Ethan Sanchez", id: "R200043", role: "hr", branch: "ECE", year: "E3" },
  { sNo: 44, name: "Sofia Morris", id: "R200044", role: "executive", branch: "EEE", year: "E4" },
  { sNo: 45, name: "Jacob Rogers", id: "R200045", role: "core", branch: "ME", year: "E1" },
  { sNo: 46, name: "Camila Reed", id: "R200046", role: "accountant", branch: "CSE", year: "E2" },
  { sNo: 47, name: "Michael Cook", id: "R200047", role: "hr", branch: "IT", year: "E3" },
  { sNo: 48, name: "Penelope Morgan", id: "R200048", role: "executive", branch: "ECE", year: "E4" },
  { sNo: 49, name: "Alexander Bell", id: "R200049", role: "core", branch: "EEE", year: "E1" },
  { sNo: 50, name: "Chloe Murphy", id: "R200050", role: "accountant", branch: "ME", year: "E2" },
  { sNo: 51, name: "Luke Bailey", id: "R200051", role: "hr", branch: "CSE", year: "E3" },
  { sNo: 52, name: "Layla Rivera", id: "R200052", role: "executive", branch: "IT", year: "E4" },
  { sNo: 53, name: "Gabriel Cooper", id: "R200053", role: "core", branch: "ECE", year: "E1" },
  { sNo: 54, name: "Zoey Richardson", id: "R200054", role: "accountant", branch: "EEE", year: "E2" },
  { sNo: 55, name: "Jayden Cox", id: "R200055", role: "hr", branch: "ME", year: "E3" },
  { sNo: 56, name: "Nora Howard", id: "R200056", role: "executive", branch: "CSE", year: "E4" },
  { sNo: 57, name: "Carter Ward", id: "R200057", role: "core", branch: "IT", year: "E1" },
  { sNo: 58, name: "Hannah Brooks", id: "R200058", role: "accountant", branch: "ECE", year: "E2" },
  { sNo: 59, name: "Anthony Gray", id: "R200059", role: "hr", branch: "EEE", year: "E3" },
  { sNo: 60, name: "Stella James", id: "R200060", role: "executive", branch: "ME", year: "E4" },
  { sNo: 61, name: "Julian Bennett", id: "R200061", role: "core", branch: "CSE", year: "E1" },
  { sNo: 62, name: "Paisley Russell", id: "R200062", role: "accountant", branch: "IT", year: "E2" },
  { sNo: 63, name: "Leo Griffin", id: "R200063", role: "hr", branch: "ECE", year: "E3" },
  { sNo: 64, name: "Violet Foster", id: "R200064", role: "executive", branch: "EEE", year: "E4" },
  { sNo: 65, name: "Hunter Butler", id: "R200065", role: "core", branch: "ME", year: "E1" },
  { sNo: 66, name: "Ellie Simmons", id: "R200066", role: "accountant", branch: "CSE", year: "E2" },
  { sNo: 67, name: "Isaac Foster", id: "R200067", role: "hr", branch: "IT", year: "E3" },
  { sNo: 68, name: "Aurora Hayes", id: "R200068", role: "executive", branch: "ECE", year: "E4" },
  { sNo: 69, name: "Eli Powell", id: "R200069", role: "core", branch: "EEE", year: "E1" },
  { sNo: 70, name: "Hazel Barnes", id: "R200070", role: "accountant", branch: "ME", year: "E2" },
  { sNo: 71, name: "Caleb Ross", id: "R200071", role: "hr", branch: "CSE", year: "E3" },
  { sNo: 72, name: "Lucy Henderson", id: "R200072", role: "executive", branch: "IT", year: "E4" },
  { sNo: 73, name: "Dylan Coleman", id: "R200073", role: "core", branch: "ECE", year: "E1" },
  { sNo: 74, name: "Savannah Jenkins", id: "R200074", role: "accountant", branch: "EEE", year: "E2" },
  { sNo: 75, name: "Wyatt Perry", id: "R200075", role: "hr", branch: "ME", year: "E3" }
];


const columns = [
  { name: 'S No', selector: row => row.sNo, sortable: true },
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'ID', selector: row => row.id },
  { name: 'Role', selector: row => row.role },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Year', selector: row => row.year }
];

const OurTeamList = () => {
  const [search, setSearch] = useState("");
  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-50 text-gray-800 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-4">
        <h1 className='about-title text-center'>Our <span className='span'> Team</span> </h1>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredMembers}
          pagination
          responsive
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default OurTeamList;
