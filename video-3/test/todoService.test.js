const { describe, it, before, beforeEach } = require('mocha')
const { expect } = require('chai')
const { createSandbox } = require('sinon')
const TodoService = require('../src/todoService')

describe('todoService', () => {
    let sandbox

    before(() => {
        sandbox = createSandbox()
    })

    describe('#list', () => {
        let todoService
        const mockedDatabase = [
            {
                text: 'Todo Item',
                meta: { revision: 0, created: 1617129783039, version: 0 },
                '$loki': 1
            }
        ]

        beforeEach(() => {
            const dependencies = {
                todoRepository: {
                    list: sandbox.stub().returns(mockedDatabase)
                }
            }

            todoService = new TodoService(dependencies)
        })

        it('should return data on a specific format', () => {
            const result = todoService.list()
            const [{ meta, $loki, ...expected }] = mockedDatabase
            expect(result).to.be.deep.equal([expected])
        })
    })
})