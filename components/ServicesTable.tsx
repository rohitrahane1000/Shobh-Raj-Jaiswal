import React from 'react';

const ServicesTable = () => {
  return (
    <section id="services" className="services-table-section">
      <div className="container">
        <h2 className="services-table-title">Our Comprehensive Services</h2>
        <p className="services-table-subtitle">
          Chartered Accountant Shobh Raj Jaiswal - Reliable Financial Services
        </p>
        
        <div className="table-container">
          <table className="services-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Key Features</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="service-name">Income Tax Return Filing</td>
                <td>
                  Complete income tax return preparation and filing services for individuals, 
                  businesses, and corporations. We ensure accurate calculations, maximum 
                  deductions, and timely submissions to avoid penalties.
                </td>
                <td>
                  • Online filing<br/>
                  • Maximum deductions<br/>
                  • Error-free returns<br/>
                  • Timely submission<br/>
                  • Follow-up support
                </td>
                <td>
                  • Tax savings<br/>
                  • Compliance assurance<br/>
                  • Penalty avoidance<br/>
                  • Professional accuracy<br/>
                  • Peace of mind
                </td>
              </tr>
              
              <tr>
                <td className="service-name">GST Return Filing</td>
                <td>
                  Comprehensive GST return filing services including GSTR-1, GSTR-3B, 
                  annual returns, and reconciliation. We handle all aspects of GST 
                  compliance to keep your business running smoothly.
                </td>
                <td>
                  • Monthly/Quarterly returns<br/>
                  • Input tax credit optimization<br/>
                  • GST reconciliation<br/>
                  • Notice handling<br/>
                  • Refund processing
                </td>
                <td>
                  • GST compliance<br/>
                  • Reduced liability<br/>
                  • Smooth operations<br/>
                  • Expert guidance<br/>
                  • Time savings
                </td>
              </tr>
              
              <tr>
                <td className="service-name">Audit Services</td>
                <td>
                  Professional audit services including statutory audits, internal audits, 
                  tax audits, and compliance audits. Our thorough examination ensures 
                  accuracy, transparency, and regulatory compliance.
                </td>
                <td>
                  • Statutory audits<br/>
                  • Internal audits<br/>
                  • Tax audits<br/>
                  • Compliance audits<br/>
                  • Risk assessment
                </td>
                <td>
                  • Financial transparency<br/>
                  • Risk mitigation<br/>
                  • Regulatory compliance<br/>
                  • Investor confidence<br/>
                  • Process improvement
                </td>
              </tr>
              
              <tr>
                <td className="service-name">Business Advisory</td>
                <td>
                  Strategic business consulting services to help you make informed decisions, 
                  improve operations, and achieve sustainable growth. We provide expert 
                  guidance on business planning, restructuring, and expansion.
                </td>
                <td>
                  • Business planning<br/>
                  • Financial analysis<br/>
                  • Growth strategies<br/>
                  • Risk management<br/>
                  • Performance optimization
                </td>
                <td>
                  • Strategic clarity<br/>
                  • Improved profitability<br/>
                  • Risk reduction<br/>
                  • Growth acceleration<br/>
                  • Competitive advantage
                </td>
              </tr>
              
              <tr>
                <td className="service-name">Tax Planning</td>
                <td>
                  Comprehensive tax planning strategies to minimize tax liability while 
                  ensuring full compliance. We help individuals and businesses optimize 
                  their tax position through legal and effective planning methods.
                </td>
                <td>
                  • Tax optimization<br/>
                  • Investment planning<br/>
                  • Deduction maximization<br/>
                  • Compliance strategies<br/>
                  • Future planning
                </td>
                <td>
                  • Tax savings<br/>
                  • Legal compliance<br/>
                  • Financial efficiency<br/>
                  • Long-term benefits<br/>
                  • Expert guidance
                </td>
              </tr>
              
              <tr>
                <td className="service-name">Financial Consultation</td>
                <td>
                  Expert financial consultation services covering investment advice, 
                  financial planning, cash flow management, and wealth creation strategies. 
                  We help you make informed financial decisions for a secure future.
                </td>
                <td>
                  • Investment advice<br/>
                  • Financial planning<br/>
                  • Cash flow management<br/>
                  • Wealth creation<br/>
                  • Retirement planning
                </td>
                <td>
                  • Financial security<br/>
                  • Wealth growth<br/>
                  • Informed decisions<br/>
                  • Future planning<br/>
                  • Expert support
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicesTable;