import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const[teachers, setTeachers] = useState([]);

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const data = {
      week_day: weekDay,
      subject,
      time,
    };

    api.get('/classes', { params: data }).then(response => {
      setTeachers(response.data);
    });
  }

  return (
    <>
      <div id="page-teacher-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis.">
          <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
              value={weekDay}
              onChange={(e) => setWeekDay(e.target.value)}
            />
            <Input
              name="time"
              label="Hora"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button type="submit">Buscar</button>
          </form>
        </PageHeader>

        <main>
          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem key={teacher.id} teacher={teacher} />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default TeacherList;
