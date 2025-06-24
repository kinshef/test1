'use client';

import { SelectSearch } from './components';
import { useState } from 'react';

const countries = [
  { value: '1', text: 'Беларусь' },
  { value: '2', text: 'Россия' },
  { value: '97', text: 'Австралия' },
  { value: '48', text: 'Австрия' },
  { value: '16', text: 'Азербайджан' },
  { value: '104', text: 'Алжир' },
  { value: '85', text: 'Ангола' },
  { value: '74', text: 'Аргентина' },
  { value: '35', text: 'Армения' },
  { value: '44', text: 'Бельгия' },
  { value: '36', text: 'Болгария' },
  { value: '86', text: 'Бразилия' },
  { value: '87', text: 'Бурунди' },
  { value: '28', text: 'Великобритания' },
  { value: '34', text: 'Венгрия' },
  { value: '95', text: 'Венесуэла' },
  { value: '70', text: 'Вьетнам' },
  { value: '113', text: 'Гана' },
  { value: '82', text: 'Гватемала' },
  { value: '13', text: 'Германия' },
  { value: '60', text: 'Греция' },
  { value: '12', text: 'Грузия' },
  { value: '33', text: 'Дания' },
  { value: '10', text: 'Другие' },
  { value: '47', text: 'Египет' },
  { value: '15', text: 'Израиль' },
  { value: '68', text: 'Индия' },
  { value: '101', text: 'Индонезия' },
  { value: '76', text: 'Иордания' },
  { value: '98', text: 'Ирак' },
  { value: '45', text: 'Иран' },
  { value: '64', text: 'Ирландия' },
  { value: '106', text: 'Исландия' },
  { value: '37', text: 'Испания' },
  { value: '41', text: 'Италия' },
  { value: '111', text: 'Йемен' },
  { value: '19', text: 'Казахстан' },
  { value: '115', text: 'Камбоджа' },
  { value: '67', text: 'Камерун' },
  { value: '22', text: 'Канада' },
  { value: '112', text: 'Катар' },
  { value: '20', text: 'Киргизия' },
  { value: '56', text: 'Китай' },
  { value: '57', text: 'Колумбия' },
  { value: '116', text: 'Конго' },
  { value: '71', text: 'Корея' },
  { value: '108', text: 'Коста-Рика' },
  { value: '69', text: 'Кот-д’Ивуар' },
  { value: '50', text: 'Куба' },
  { value: '31', text: 'Кувейт' },
  { value: '7', text: 'Латвия' },
  { value: '46', text: 'Ливан' },
  { value: '92', text: 'Ливия' },
  { value: '6', text: 'Литва' },
  { value: '23', text: 'Лицо без гр-ва' },
  { value: '96', text: 'Македония' },
  { value: '91', text: 'Малайзия' },
  { value: '102', text: 'Марокко' },
  { value: '78', text: 'Мексика' },
  { value: '18', text: 'Молдова' },
  { value: '42', text: 'Монголия' },
  { value: '139', text: 'Не гражданин' },
  { value: '90', text: 'Непал' },
  { value: '66', text: 'Нигерия' },
  { value: '25', text: 'Нидерланды' },
  { value: '103', text: 'Новая Зеландия' },
  { value: '59', text: 'Норвегия' },
  { value: '62', text: 'ОАЭ' },
  { value: '110', text: 'Оман' },
  { value: '119', text: 'Пакистан' },
  { value: '14', text: 'Польша' },
  { value: '81', text: 'Португалия' },
  { value: '63', text: 'Республика Кипр' },
  { value: '107', text: 'Сальвадор' },
  { value: '32', text: 'Саудовская Аравия' },
  { value: '100', text: 'Сенегал' },
  { value: '65', text: 'Сербия' },
  { value: '114', text: 'Сингапур' },
  { value: '61', text: 'Словакия' },
  { value: '79', text: 'Словения' },
  { value: '80', text: 'Судан' },
  { value: '17', text: 'США' },
  { value: '49', text: 'Таджикистан' },
  { value: '84', text: 'Таиланд' },
  { value: '88', text: 'Тунис' },
  { value: '58', text: 'Туркменистан' },
  { value: '38', text: 'Турция' },
  { value: '27', text: 'Узбекистан' },
  { value: '11', text: 'Украина' },
  { value: '109', text: 'Филиппины' },
  { value: '29', text: 'Финляндия' },
  { value: '40', text: 'Франция' },
  { value: '43', text: 'Хорватия' },
  { value: '72', text: 'Черногория' },
  { value: '21', text: 'Чехия' },
  { value: '94', text: 'Чили' },
  { value: '30', text: 'Швейцария' },
  { value: '24', text: 'Швеция' },
  { value: '118', text: 'Шри-Ланка' },
  { value: '93', text: 'Эль-Сальвадор' },
  { value: '5', text: 'Эстония' },
  { value: '39', text: 'Эфиопия' },
  { value: '105', text: 'ЮАР' },
  { value: '99', text: 'Южная Корея' },
  { value: '75', text: 'Япония' },
];

export const ListPage = () => {
  const [err, setErr] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = !!selected;

    setErr(!isValid);

    if (isValid) {
      console.log(selected);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <div
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}
      >
        TEST 1
        {!err && selected ? ` (${selected?.text} - id ${selected?.value})` : ''}
      </div>

      <form action="/example">
        <SelectSearch
          selected={selected}
          setSelected={setSelected}
          err={err}
          setErr={setErr}
          items={countries}
        />
        <button
          style={{ marginTop: '10px' }}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
