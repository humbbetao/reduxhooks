import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function CoursesList() {
	const courses = useSelector(state => state.data);
	const dispatch = useDispatch();
	function addCourse() {
		dispatch({ type: 'ADD_COURSE', title: 'nextJs' });
	}
	return (
		<React.Fragment>
			<ul>
				{courses.map((course, index) => (
					<li key={index}>{course} </li>
				))}
			</ul>
			<button type="button" onClick={addCourse}>
				Add course
			</button>
		</React.Fragment>
	);
}
