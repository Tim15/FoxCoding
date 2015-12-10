FirstView = require './first-view'
{CompositeDisposable} = require 'atom'

module.exports = First =
  firstView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @firstView = new FirstView(state.firstViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @firstView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'first:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @firstView.destroy()

  serialize: ->
    firstViewState: @firstView.serialize()

  toggle: ->
    console.log 'First was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
