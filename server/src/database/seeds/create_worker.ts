import { Knex } from "knex";

//Default items

export async function seed(knex:Knex) {
 await knex('workers').insert([
{image:'trabalhador0.svg', name:'António Fereira',date_nasc:'01-04-1997',level:'Técnico Medio'},
{image:'trabalhador1.svg', name:'Joana Pinal',date_nasc:'20-05-1967',level:'Técnico Profissional'},
{image:'trabalhador2.svg', name:'Maria Quental',date_nasc:'12-06-1977',level:'Técnico Qualificado'},
{image:'trabalhador3.svg', name:'Marga Magda',date_nasc:'16-08-1988',level:'Técnico Medio'},
{image:'trabalhador4.svg', name:'Paulo Santos',date_nasc:'27-09-1989',level:'Técnico Profissional'},
{image:'trabalhador5.svg', name:'Fernandes Filipe',date_nasc:'02-10-1979',level:'Técnico Qualificado'},
])
}