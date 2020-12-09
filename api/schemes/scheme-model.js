// scheme-model
const db = require('../../data/db-config')

function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes as s').where('s.id', id)

}
function findSteps() {
    return db('schemes as sc')
        .join('steps as st', 'sc.id', 'st.scheme_id')
        .select('st.instructions', 'st.step_number')
        .where('sc.id', id)
}
function add(scheme) {
    return db('schemes').insert(scheme)
}

function update(changes, id) {
    return db('schemes as s')
        .where('s.id', id)
        .update('scheme_name', changes.scheme_name)
}
function remove() {
    return db('schemes as s').where('s.id', id).del()
}
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}