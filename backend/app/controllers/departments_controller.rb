class DepartmentsController < ApplicationController
  before_action :set_department, only: %i[ show update destroy ]

  # GET /departments
  def index
    @departments = Department.order(id: :asc)

    render json: @departments, include: [ :positions ]
  end

  # GET /departments/1
  def show
    render json: @department, include: [ :positions ]
  end

  # POST /departments
  def create
    @department = Department.new(department_params)

    if @department.save
      render  json: @department
    else
      render json: @department.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /departments/1
  def update
    if @department.update(department_params)
      render json: @department
    else
      render json: @department.errors, status: :unprocessable_entity
    end
  end

  # DELETE /departments/1
  def destroy
    @department.destroy

    render json: @department
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_department
      @department = Department.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def department_params
      params.require(:department).permit(:name, :position_id)
    end
end