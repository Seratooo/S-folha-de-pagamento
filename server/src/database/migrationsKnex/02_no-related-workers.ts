import {Knex} from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('no_related_workers',table =>{
    table.increments('id').primary();
    table.integer('fk_worker');
    table.integer('project_data').notNullable().references('id').inTable('projects');
    table.integer('tasks_performed').notNullable();
    table.float('task_value').notNullable();
    table.string('responsibility').notNullable();
    table.string('departament').notNullable();
    table.integer('qnt_delays').notNullable();
    table.integer('qnt_houres_worked').notNullable();
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('no_related_workers');
}