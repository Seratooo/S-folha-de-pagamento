import {Knex} from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('projects',table =>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('client').notNullable();
    table.string('project_cost').notNullable();
    table.string('date_start').notNullable();
    table.string('date_end').notNullable();
    table.double('completion_percentage').notNullable();
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('projects');
} 