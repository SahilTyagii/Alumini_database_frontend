import { useState } from 'react';
import './Student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Student() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('fullName'); 
  const [studentData, setStudentData] = useState([
    { fullName: 'Alice Johnson', year: 'Sophomore', branch: 'Computer Science', gpa: '3.8', projects: 'AI Research' },
    { fullName: 'Bob Smith', year: 'Junior', branch: 'Mechanical Engineering', gpa: '3.6', projects: 'Robotics' },
    
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    fullName: '',
    year: '',
    branch: '',
    gpa: '',
    projects: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleDelete = (index) => {
    const newStudentData = studentData.filter((_, i) => i !== index);
    setStudentData(newStudentData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewStudent(studentData[index]);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedData = studentData.map((student, i) => (i === editIndex ? newStudent : student));
      setStudentData(updatedData);
      setEditIndex(null);
    } else {
      setStudentData([...studentData, newStudent]);
    }
    setNewStudent({ fullName: '', year: '', branch: '', gpa: '', projects: '' });
    setShowForm(false);
  };

  const filteredData = studentData.filter(student =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.gpa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.projects.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div className='student'>
      <h1>Student Directory</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <select onChange={handleSortChange} value={sortBy} className='sort-select'>
          <option value='fullName'>Sort by Full Name</option>
          <option value='year'>Sort by Year</option>
          <option value='branch'>Sort by Branch</option>
          <option value='gpa'>Sort by GPA</option>
          <option value='projects'>Sort by Projects</option>
        </select>
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className='student-form'>
          <label>
            Full Name:
            <input
              type='text'
              name='fullName'
              value={newStudent.fullName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Year:
            <input
              type='text'
              name='year'
              value={newStudent.year}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type='text'
              name='branch'
              value={newStudent.branch}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            GPA:
            <input
              type='text'
              name='gpa'
              value={newStudent.gpa}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Projects:
            <input
              type='text'
              name='projects'
              value={newStudent.projects}
              onChange={handleFormChange}
              required
            />
          </label>
          <button type='submit'>{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
        </form>
      )}

      <table className='student-table'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Year</th>
            <th>Branch</th>
            <th>GPA</th>
            <th>Projects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((student, index) => (
            <tr key={index}>
              <td>{student.fullName}</td>
              <td>{student.year}</td>
              <td>{student.branch}</td>
              <td>{student.gpa}</td>
              <td>{student.projects}</td>
              <td>
                <button
                  className='action-button'
                  onClick={() => handleEdit(index)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className='action-button'
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
