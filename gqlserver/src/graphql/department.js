//utils
const NotFoundError = require('lib/not_found_error')

module.exports = {
  Query: {
    // resolver: (parent,args,context,info) <- options params
    // here '_' <- parent
    departments: (_,__,context) => context.dataSources.department.get(),
    department: (_,{ id },context) => context.dataSources.department.getById(id) || new NotFoundError(),
  }, // end Query

  // join resolvers
  Department: {
    // resolver: (parent,args,context,info) <- options params
    tasks: (_,__,context) => context.dataSources.tasks.getByDepId(_.id)
  },
}
